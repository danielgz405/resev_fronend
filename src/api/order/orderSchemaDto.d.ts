export interface OrderSchemaDto {
    table_id: string;
    user_id: string;
    subtotal: number;
    iva: number;
    total: number;
    plates: string[];
}