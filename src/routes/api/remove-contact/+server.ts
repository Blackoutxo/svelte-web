import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
    // 1. Get the data of the contact we want to delete
    const { name, address, phone } = await request.json();

    const statement = db.prepare(
        'DELETE FROM contacts WHERE name = @name AND address = @address AND phone = @phone'
    );

    const result = statement.run({ name, address, phone });

	return json({ success: true, message: 'Contact deleted' }, { status: 200 });
}
