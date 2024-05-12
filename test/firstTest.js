import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();


// ULTILIZANDO O MOCHA
// bloco Describe - agrupa IT (teste individuais)
describe('Adicionar tarefa', function () {
    //IT - Teste Individuais
    it('1 Adicionar uma tarefa com sucesso', async function() {
        // abrir o nevegador
        let driver = await new Builder().forBrowser("firefox").build();
    
         // navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
    
        // lista das tarefas - ARRAY
        const tarefas = [
            "Aprender Selenium",
            "html",
            "css",
            "JavaScript",
            "QA",
            "TECHFIXE",
            "LOOP",
            "MOCHA",
            "CYPRESS",
            "TAREFAS"
        ];
        // Loop (FOR) para SELECIONAR e ESCREVER as tarefas
        for (let i = 0; i < tarefas.length; i++) {
            await driver.findElement(By.id('inputTask')).sendKeys(tarefas[i], Key.RETURN);
    
            // Encontrar o elemento XPATH e obter o texto
            let xpath = `/html/body/div/section/ul/li[${i + 1}]/label`;
            let seleniumElement = await driver.findElement(By.xpath(xpath));
            let actualText = await seleniumElement.getText();
    
             //valores para verificação de armazenamento.
             console.log(`Valor esperado: ${tarefas[i]}`);
             console.log(`Valor atual: ${actualText}`);
    
            // Assertion usando Chai
            actualText.should.equal(tarefas[i]);
        }
        await driver.quit();
    })

    it('2 Adicionar uma tarefa com sucesso', async function() {
        // abrir o nevegador
        let driver = await new Builder().forBrowser("firefox").build();
    
         // navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
    
        // lista das tarefas - ARRAY
        const tarefas = [
            "Aprender Selenium",
            "html",
            "css",
            "JavaScript",
            "QA",
            "TECHFIXE",
            "LOOP",
            "MOCHA",
            "CYPRESS",
            "TAREFAS"
        ];
        // Loop (FOR) para SELECIONAR e ESCREVER as tarefas
        for (let i = 0; i < tarefas.length; i++) {
            await driver.findElement(By.id('inputTask')).sendKeys(tarefas[i], Key.RETURN);
    
            // Encontrar o elemento XPATH e obter o texto
            let xpath = `/html/body/div/section/ul/li[${i + 1}]/label`;
            let seleniumElement = await driver.findElement(By.xpath(xpath));
            let actualText = await seleniumElement.getText();
    
             //valores para verificação de armazenamento.
             console.log(`Valor esperado: ${tarefas[i]}`);
             console.log(`Valor atual: ${actualText}`);
    
            // Assertion usando Chai
            actualText.should.equal(tarefas[i]);
        }
        await driver.quit();
    })

    it('3 Adicionar uma tarefa com sucesso', async function() {
        // abrir o nevegador
        let driver = await new Builder().forBrowser("firefox").build();
    
         // navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
    
        // lista das tarefas - ARRAY
        const tarefas = [
            "Aprender Selenium",
            "html",
            "css",
            "JavaScript",
            "QA",
            "TECHFIXE",
            "LOOP",
            "MOCHA",
            "CYPRESS",
            "TAREFAS"
        ];
        // Loop (FOR) para SELECIONAR e ESCREVER as tarefas
        for (let i = 0; i < tarefas.length; i++) {
            await driver.findElement(By.id('inputTask')).sendKeys(tarefas[i], Key.RETURN);
    
            // Encontrar o elemento XPATH e obter o texto
            let xpath = `/html/body/div/section/ul/li[${i + 1}]/label`;
            let seleniumElement = await driver.findElement(By.xpath(xpath));
            let actualText = await seleniumElement.getText();
    
             //valores para verificação de armazenamento.
             console.log(`Valor esperado: ${tarefas[i]}`);
             console.log(`Valor atual: ${actualText}`);
    
            // Assertion usando Chai
            actualText.should.equal(tarefas[i]);
        }
        await driver.quit();
    })
})  

