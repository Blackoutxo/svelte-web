import { json, type RequestHandler } from '@sveltejs/kit';
import db from '$lib/server/db';

export const GET: RequestHandler = async () => {
    const statement = db.prepare('SELECT * FROM contacts');
    
    const contacts = statement.all();

    return json({ 
        success: true, 
        contacts: contacts 
    }, { 
        status: 200 
    });
};