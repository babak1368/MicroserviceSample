import expressLoader from './expressLoader';
import express from "express";
import cacheLoader from './cacheLoader';
import messageBrokerLoader from './messageBrokerLoader';

export default async ({ expressApp }: { expressApp: express.Express }) => {
    await expressLoader({ app: expressApp });
    await cacheLoader({ app: expressApp });
    await messageBrokerLoader();
};
