import { z } from 'zod';
import EarlyAccess from '../models/EarlyAccess.js';
import emailService from '../services/emailService.js';
import logger from '../utils/logger.js';
import { USER_TYPES } from '../config/constants.js';

export const earlyAccessSchema = z.object({
  body: z.object({
    email: z.string().email(),
    type: z.enum([USER_TYPES.USER, USER_TYPES.PODCASTER])
  })
});

export const requestEarlyAccess = async (req, res, next) => {
  try {
    const { email, type } = req.body;

    const earlyAccess = new EarlyAccess({ email, type });
    await earlyAccess.save();

    await emailService.sendWelcomeEmail(email, type);
    logger.info(`Early access request created for ${email}`);

    res.status(201).json({
      success: true,
      message: 'Early access request submitted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const checkStatus = async (req, res, next) => {
  try {
    const { email } = req.query;
    
    const request = await EarlyAccess.findOne({ email });
    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json({
      email: request.email,
      type: request.type,
      status: request.status,
      createdAt: request.createdAt
    });
  } catch (error) {
    next(error);
  }
};