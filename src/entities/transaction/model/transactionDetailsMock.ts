import { TransactionStatus } from "./transactionStatus";
import { type TransactionResponse } from "./transaction.types";
import appleIcon from "@/shared/icons/apple.svg";
import spotifyIcon from "@/shared/icons/spotify.svg";
import moneyTransferIcon from "@/shared/icons/moneyTransfer.svg";
import cartIcon from "@/shared/icons/cart.svg";

export interface TransactionMockItem extends TransactionResponse {
    id: string;
    name: string;
    icon: string;
    category: string;
    commission: number;
    country: string;
    merchantLocation: string;
    authCode: string;
}

export const transactionDetailsMocks: TransactionMockItem[] = [
    {
        id: "1",
        name: "Apple Store", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-4412-****-5566",
        amount: 5.99,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-09-01T14:30:00Z",
        description: "Apple Store subscription",
        category: "Entertainment",
        icon: appleIcon,
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "Apple Store, USA",
        authCode: "482015"
    },
    {
        id: "2",
        name: "Spotify", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-7788-****-9900",
        amount: 12.99,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-31T09:15:00Z",
        description: "Spotify Premium",
        category: "Music",
        icon: spotifyIcon, 
        commission: 0.15,
        country: "Sweden",
        merchantLocation: "Spotify, SWE",
        authCode: "109432"
    },
    {
        id: "3",
        name: "Money Transfer", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-1111-****-2222",
        amount: 300.00,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-30T18:45:00Z",
        description: "Перевод Александру К.",
        category: "Transaction",
        icon: moneyTransferIcon, 
        commission: 0,
        country: "Russia",
        merchantLocation: "P2P, RUS",
        authCode: "884321"
    },
    {
        id: "4",
        name: "Grocery", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-5555-****-6666",
        amount: 88.00,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-28T12:00:00Z",
        description: "Supermarket Purchase",
        category: "Shopping",
        icon: cartIcon, 
        commission: 0,
        country: "Russia",
        merchantLocation: "Grocery Store, RUS",
        authCode: "302914"
    },
    {
        id: "5",
        name: "Apple Store", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-3333-****-4444",
        amount: 5.99,
        currency: "USD",
        status: TransactionStatus.FAILED,
        createdAt: "2026-09-01T15:00:00Z",
        description: "In-App Purchase iCloud",
        category: "Entertainment",
        icon: appleIcon, 
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "Apple Store, USA",
        authCode: "004312"
    },
    {
        id: "6",
        name: "Money Transfer", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-2233-****-4455",
        amount: 300.00,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-25T11:20:00Z",
        description: "Outgoing Transfer",
        category: "Transaction",
        icon: moneyTransferIcon, 
        commission: 1.50,
        country: "Russia",
        merchantLocation: "P2P Transfer",
        authCode: "749301"
    },
  {
        id: "7",
        name: "Apple Store", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-8888-****-1111",
        amount: 5.99,
        currency: "USD",
        status: TransactionStatus.FAILED,
        createdAt: "2026-08-24T16:10:00Z",
        description: "App Store Services",
        category: "Entertainment",
        icon: appleIcon, 
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "App Store, USA",
        authCode: "110492"
    },
    {
        id: "8",
        name: "Spotify", 
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-1234-****-5678",
        amount: 12.99,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-22T21:40:00Z",
        description: "Spotify Family Subscription",
        category: "Music",
        icon: spotifyIcon, 
        commission: 0.15,
        country: "Sweden",
        merchantLocation: "Spotify, SWE",
        authCode: "958204"
    }
];
