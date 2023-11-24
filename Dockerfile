# Utilisez une image Node.js légère comme base
FROM node:14-alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Construisez l'application
RUN npm run build

# Exposez le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour exécuter votre application
CMD ["npm", "start"]
