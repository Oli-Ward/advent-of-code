import fs from 'fs';
import csv from 'csv-parser';

export const readCsv = async (file: string) => {
    const data: any[] = []
    return new Promise<any[]>((resolve, reject) => {
        fs.createReadStream(file)
    .pipe(csv({headers: false}))
    .on('data', (row) => {
        data.push(row)
    })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
        });
    };