import { Client } from 'pg';

export async function getClient() {
    const client = new Client({
        host :"localhost",
        port :5432,
        database : 'test',
        user : 'postgres',
        password : 'varad@6862'
    });
    // const client = new Client("postgresql://varad:varad6862@us-east-1.7984dc65-080f-45b6-8fbc-98472a82ccf8.aws.yugabyte.cloud:5433/test");
    await client.connect();
    return client;
}