import { StockTransferItem } from "./stock-transfer-item";

export interface Stocktransfer {
    id: number;
    fromWarehouseId: number;
    toWarehouseId: number;
    fromWarehouseName: string | null;
    toWarehouseName: string | null;
    items: StockTransferItem[]; 
    transferDate: Date;
}
