import 'reflect-metadata';
import app from './app';
import './database/connection/connection';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 server running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log(`Unhandled Rejection at: ${reason}`);
});
