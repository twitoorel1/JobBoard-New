import { NextFunction, Request, Response } from 'express';
import Company from '../models/company.model.js';
import { BadRequestError, NotFoundError, ServerError, UnauthorizeError } from '../errors/Errors.js';

/* Routes For Employee */
export const findById = async (req: Request, res: Response, next: NextFunction) => {
	res.json({ status: 'ok', data: req.user });
};

export const getAllCompany = async (req: Request, res: Response, next: NextFunction) => {
	res.json({ status: 'ok', data: req.user });
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
	res.json({ status: 'ok', data: req.user });
};

export const updateById = async (req: Request, res: Response, next: NextFunction) => {
	res.json({ status: 'ok', data: req.user });
};

/* Routes For Admin */
export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
	res.json({ status: 'ok', data: req.user });
};
