# GENESIS Todo

> **Turn Ideas Into Action** with AI-powered task management.

GENESIS Todo is a premium, modern task management application built with Next.js 16. It combines beautiful 3D aesthetics with powerful AI features to help you brainstorm, plan, and execute your goals.

![GENESIS Todo App](public/screenshot.png)

## ✨ Features

- **🧠 AI Brainstorming**: Chat with an AI assistant to break down complex goals into actionable tasks automatically.
- **🎨 Premium Design**: Stunning UI with glassmorphism, gradients, and 3D animated backgrounds.
- **⚡ Real-time Updates**: Instant interactions with smooth Framer Motion animations.
- **🔌 Optional Web3**: Connect your wallet for future decentralized features (optional).
- **📱 Responsive**: Works perfectly on desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **AI**: [HuggingFace Inference](https://huggingface.co/docs/huggingface.js/inference/README)
- **Web3**: [RainbowKit](https://www.rainbowkit.com/) & [Wagmi](https://wagmi.sh/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/genesis-todo.git
    cd genesis-todo
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory to configure optional features:

```env
# Optional: Enable Web3 features (WalletConnect)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Optional: Use your own HuggingFace API key (for higher rate limits)
HUGGINGFACE_API_KEY=your_hf_token_here
```

*Note: The app works out-of-the-box without these variables!*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
