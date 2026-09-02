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
        name: "Amazon Store",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-4412-****-5566",
        amount: 89.99,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-09-01T14:30:00Z",
        description: "Amazon Store",
        category: "shopping",
        icon: cartIcon,
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "Amazon.com, USA",
        authCode: "482015"
    },
    {
        id: "2",
        name: "ВкусВилл",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-7788-****-9900",
        amount: 1450.00,
        currency: "RUB",
        status: TransactionStatus.FAILED,
        createdAt: "2026-08-31T09:15:00Z",
        description: "Покупка во ВкусВилл",
        category: "shopping",
        icon: cartIcon,
        commission: 0,
        country: "Russia",
        merchantLocation: "VkusVill, RUS",
        authCode: "109432"
    },
    {
        id: "3",
        name: "Money Transfer",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-1111-****-2222",
        amount: 5000.00,
        currency: "RUB",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-30T18:45:00Z",
        description: "Перевод Александру К.",
        category: "transaction",
        icon: moneyTransferIcon,
        commission: 15.00,
        country: "Russia",
        merchantLocation: "P2P, RUS",
        authCode: "884321"
    },
    {
        id: "4",
        name: "Spotify",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-5555-****-6666",
        amount: 12.50,
        currency: "EUR",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-28T12:00:00Z",
        description: "Spotify Premium",
        category: "music",
        icon: spotifyIcon,
        commission: 0.20,
        country: "Sweden",
        merchantLocation: "Spotify, SWE",
        authCode: "302914"
    },
    {
        id: "5",
        name: "Додо Пицца",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-3333-****-4444",
        amount: 850.00,
        currency: "RUB",
        status: TransactionStatus.FAILED,
        createdAt: "2026-09-01T15:00:00Z",
        description: "Додо Пицца",
        category: "shopping",
        icon: cartIcon,
        commission: 0,
        country: "Russia",
        merchantLocation: "Dodo Pizza, RUS",
        authCode: "004312"
    },
    {
        id: "6",
        name: "Apple Store",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-2233-****-4455",
        amount: 1299.00,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-25T11:20:00Z",
        description: "Apple iPad Pro",
        category: "entertainment",
        icon: appleIcon,
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "Apple.com, USA",
        authCode: "749301"
    },
    {
        id: "7",
        name: "Apple Store",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-8888-****-1111",
        amount: 4.99,
        currency: "USD",
        status: TransactionStatus.FAILED,
        createdAt: "2026-08-24T16:10:00Z",
        description: "App Store In-App",
        category: "entertainment",
        icon: appleIcon,
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "App Store, USA",
        authCode: "110492"
    },
    {
        id: "8",
        name: "Apple Store",
        sourceAccountId: "acc-9932-****-1122",
        targetAccountId: "acc-1234-****-5678",
        amount: 14.95,
        currency: "USD",
        status: TransactionStatus.COMPLETED,
        createdAt: "2026-08-22T21:40:00Z",
        description: "Apple One Subscription",
        category: "entertainment",
        icon: appleIcon,
        commission: 0,
        country: "UnitedStates",
        merchantLocation: "Apple.com, USA",
        authCode: "958204"
    }
];
