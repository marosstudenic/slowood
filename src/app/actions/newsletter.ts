"use server";

export async function subscribeEmail(email: string) {
    const apiKey = process.env.ECOMAIL_API_KEY;
    if (!apiKey) {
        return {
            status: false,
            message: "Missing API key"
        }
    }

    console.log(email, apiKey);


    try {
        const response = await fetch(`https://api2.ecomailapp.cz/lists/${process.env.ECOMAIL_LIST_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                key: apiKey
            },
            body: JSON.stringify({
                subscriber_data: {
                    email: email
                },
                groups: {},
                trigger_autoresponders: true,
                update_existing: false,
                resubscribe: false,
                skip_confirmation: true,
            })
        });


        if (!response.ok) {
            return {
                status: false, // false is error
                message: response.statusText
            }
        }

        return {
            status: true, // true is success
            message: response.statusText
        }
    } catch (error) {
        return {
            status: false, // false is error
            message: error
        }
    }
}