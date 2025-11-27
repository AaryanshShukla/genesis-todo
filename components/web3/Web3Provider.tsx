'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

// Make Web3 optional - only initialize if project ID is available
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';

const config = projectId ? getDefaultConfig({
    appName: 'GENESIS Todo',
    projectId,
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
}) : null;

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
    // If no Web3 config, just render children without wallet features
    if (!config) {
        return <>{children}</>;
    }

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme({
                    accentColor: '#7b3fe4',
                    accentColorForeground: 'white',
                    borderRadius: 'medium',
                })}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
