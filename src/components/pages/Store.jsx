import Merchant from "../organisms/Merchant";

const Store = () => {
    const products = [
        {
        date: "Mar 16, 2020",
        category: "Marketing",
        title: "Boost your conversion rate",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        author: "Michael Foster",
        authorRole: "Co-Founder / CTO",
        productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
        date: "Jul 18, 2020",
        category: "Électroménager",
        title: "Cafetière Automatique",
        description: "Savourez le goût du café fraîchement moulu chaque matin avec notre cafetière automatique. Simple à utiliser, elle apporte une touche de luxe à votre routine matinale.",
        author: "Cuisine Excellence",
        authorRole: "Chef Cuisinier",
        productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
        date: "Aug 7, 2020",
        category: "Jardinage",
        title: "Ensemble d'Outils de Jardinage",
        description: "Prenez soin de votre jardin avec notre ensemble d'outils de jardinage de haute qualité. Parfait pour les amateurs de jardinage et les professionnels.",
        author: "Green Thumb",
        authorRole: "Spécialiste en Jardinage",
        productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
        date: "Sep 3, 2020",
        category: "Mode",
        title: "Sac à Dos Urbain",
        description: "Transportez vos affaires avec style grâce à notre sac à dos urbain. Conçu pour le confort et la praticité, il est idéal pour les déplacements quotidiens.",
        author: "Fashion Trends",
        authorRole: "Styliste de Mode",
        productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
        date: "Oct 15, 2020",
        category: "High-Tech",
        title: "Écouteurs Sans Fil",
        description: "Profitez d'une qualité sonore exceptionnelle avec nos écouteurs sans fil. Légers, confortables et dotés de la dernière technologie audio.",
        author: "Audio Innovations",
        authorRole: "Ingénieur Audio",
        productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ];

    return <Merchant products={products} />;
};

export default Store;
