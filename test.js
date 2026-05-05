const saudacao = require('./hello');

// Teste com erro intencional
const resultado = saudacao("Mundo");
//const esperado = "Hello, Mundo!"; // Erro proposital!
const esperado = "Olá, Mundo!"; // Erro proposital corrigido

if (resultado !== esperado) {
  console.error(` FALHA: esperado "${esperado}", mas
recebeu "${resultado}"`);
  process.exit(1); // Faz o CI falhar
}

console.log(" Todos os testes passaram!");

// Teste para nome vazio
const resultadoVazio = saudacao("");
if (resultadoVazio !== "Olá, !") {
  console.error(` FALHA: teste de string vazia`);
  process.exit(1);
}
