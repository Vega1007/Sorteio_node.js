# Sorteio_node.js
Este é um **site simples de sorteio** desenvolvido com **Node.js**.  
Ele conta com um **cadastro de nome e número de celular** e uma **página de participantes**.

Nessa página, o **administrador do site** pode visualizar os participantes e a quantidade de pessoas cadastradas.  
Também há a opção de **excluir algum participante**, se necessário.  

O administrador pode **realizar o sorteio**, sendo redirecionado para a **página do vencedor**, onde é exibido aleatoriamente o **nome e o número de contato** do ganhador.

Bibliotecas utilizadas

- Node.js  
- SQLite (banco de dados)  
- Express  
- Express-Handlebars  
- Body-Parser  
- Sequelize  
- Connect-Flash  
- Express-Session  

 O SQLite foi utilizado por ser meu primeiro projeto, com o objetivo de adquirir experiência antes de utilizar outros bancos de dados

 Para a incialização do projeto é preciso instalar as bibliotecas, no terminal inciar com *npm run dev* mas antes (tambpem mudar as configurações no package.json no “scripts“: { “dev“: “nodemon server.js“}).
 E no navegador: localhost:8000
