import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID as string;
const SHEET_ID = parseInt(process.env.NEXT_PUBLIC_SHEET_ID as string);
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env
  .GOOGLE_SERVICE_PRIVATE_KEY as string;

const serviceAccountAuth = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

export async function appendRowData(row: any) {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (err) {
    console.error('Error when add data to spread sheet: ', err);
  }
}

export async function getIDs(): Promise<number> {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows();
    if (rows.length < 1) {
      return 1;
    } else {
      return parseInt(rows[rows.length - 1].get('STT')) + 1;
    }
  } catch (err) {
    console.error('Error when get data from spread sheet: ', err);
    return 1;
  }
}
