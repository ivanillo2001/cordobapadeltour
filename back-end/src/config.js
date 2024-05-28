import {config} from 'dotenv'
config();//leer las variables de entorno

export const PORT=process.env.PORT||3000
export const DB_PORT=process.env.DB_PORT||3306
export const DB_USER=process.env.DB_USER||'cordoba-padel-tour'
export const DB_HOST=process.env.DB_HOST||'34.175.172.152'
export const DB_PASSWORD=process.env.DB_PASSWORD||';ey07M2q7d+tb&EF'
export const DB_DATABASE=process.env.DB_DATABASE||'cordobapadeltour'