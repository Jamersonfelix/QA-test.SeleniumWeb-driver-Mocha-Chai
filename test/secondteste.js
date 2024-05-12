import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

// ULTILIZANDO O MOCHA
// bloco Describe - agrupa IT (teste individuais)
describe('Segundo Teste', function () {
    //IT - Teste Individuais
    it('Adicionar uma tarefa com sucesso no segundo testenp', async function() {
        // abrir o nevegador
        let driver = await new Builder().forBrowser("firefox").build();
        
         // navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
        
        // Adicionar uma nova tarefas
        await driver.findElement(By.id('inputTask')).sendKeys("Aprender Selenium", Key.RETURN)
        
        //Assertion - verificação do texto da tarefa
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText()
        .then(function(value) {
            return value
        });
        
        // Assertion com chai
        seleniumText.should.equal("Aprender Selenium")
        
        // fechar o navegador
        await driver.quit();
    })
})
