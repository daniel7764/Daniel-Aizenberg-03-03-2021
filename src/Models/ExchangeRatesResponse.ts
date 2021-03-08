export interface ExchangeRatesResponse {
    base: string;
    date: string;
    rates: {
        USD: number;
    }
}