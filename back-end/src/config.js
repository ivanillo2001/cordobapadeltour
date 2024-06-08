import {config} from 'dotenv'
config();//leer las variables de entorno

export const PORT=process.env.PORT||3000
export const DB_PORT=process.env.DB_PORT||27701
export const DB_USER=process.env.DB_USER||'root'
export const DB_HOST=process.env.DB_HOST||'monorail.proxy.rlwy.net'
export const DB_PASSWORD=process.env.DB_PASSWORD||'apBVYQadKuhdAqZZatSIfMwmeUVUvkhc'
export const DB_DATABASE=process.env.DB_DATABASE||'railway'