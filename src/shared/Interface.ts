declare module Interface {
    export interface Data {
        avatar: string,
        email: string,
        first_name: number,
        id: string,
        last_name: string
    }

    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Data
}