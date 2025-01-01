# tcarvi.com.br
Site tcarvi.com.br

## Gerador do site
- Versões:
    - node -v
        - 22.12.0
    - npm -v
        - 10.9.0
    - npx -v
        - 10.9.0
    - ng version
        - Angular CLI: 19.0.4
        - Angular: 19.0.4

## Comandos para gerar website
```bash
npm install -g @angular/cli
```
```bash
ng n --name '' --no-create-application --new-project-root ./ --directory website
```  
```bash
cd website
```
```bash
ng g app app1 --prefix t --style scss --view-encapsulation Emulated --server-routing false --project-root ./ --inline-template false --inline-style false
```  
```bash
npm run build
```
- Verifique o site gerado em website/dist/app1/browser/
- Padronize o arquivo website/src/index.html com as seguintes propriedade:
```html
<html lang="pt-br">
<title>Título do Site</title>
```  
- Mantenha apenas 1 linha de código em: `website/src/app/app.component.html`:
```html
<router-outlet />
```
- Remova a variável title em: `website/src/app/app.component.ts`:
```typescript
export class AppComponent {}
```
- Ajuste os testes de unidade do angular, devido alterações.
- Confirme que o build, os testes e o start do projeto estão ok.  
```bash
npm run test
```  
```bash
npm run build
```  
```bash
npm run start
```

## Comandos para criação do design do website
```bash
ng add @angular/material
```  
- A depender de quantos layouts você precisar, os inclua.
```bash
ng g c l-1 --prefix t --project app1 --selector t-l-1 --view-encapsulation Emulated
```  
```bash
ng g c l-2 --prefix t --project app1 --selector t-l-2 --view-encapsulation Emulated
```  
```bash
ng g c l-3 --prefix t --project app1 --selector t-l-3 --view-encapsulation Emulated
```  
- A depender de quantos grupos de conteúdo você precisar nos layouts, os inclua. Normalmente inclua apenas 3 grupos de conteúdo, para design responsivo.  
```bash
ng g c c1-l1 --prefix t --project app1 --selector t-c1-l1 --view-encapsulation Emulated
```  
```bash
ng g c c2-l1 --prefix t --project app1 --selector t-c2-l1 --view-encapsulation Emulated
```  
```bash
ng g c c3-l1 --prefix t --project app1 --selector t-c3-l1 --view-encapsulation Emulated
```  
```bash
ng g c c1-l2 --prefix t --project app1 --selector t-c1-l2 --view-encapsulation Emulated
```  
```bash
ng g c c2-l2 --prefix t --project app1 --selector t-c2-l2 --view-encapsulation Emulated
```  
```bash
ng g c c3-l2 --prefix t --project app1 --selector t-c3-l2 --view-encapsulation Emulated
```  

- Vincule os layouts gerados nas Rotas da aplicação:
```typescript
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'l1'
  },
  {
    path: 'l1',
    component: L1Component
  }
];
```
```bash
ng test
```
```bash
ng build
```
# Inclua framework de teste e2e
- Também altere o teste criado para procurar pela palavra TCARVI que deve ser incluída em alguma tag do site.
```bash
ng add @puppeteer/ng-schematics
``` 
```bash
ng e2e
```

## layout 1
- Acrescente, no arquivo `website/src/app/l-1/l-1.component.html`, as seguintes tags, com os ajustes de importação no arquivo typescript do componente:
```html
<t-c1-l1 />
<t-c2-l1 />
<t-c3-l1 />
```  
- Os ajustes de importação de `website/src/app/l-1/l-1.component.ts` deve indicar:
```typescript
@Component({
  ...
  standalone: true,
  imports: [ConteudoL11Component, ConteudoL12Component, ConteudoL13Component],
  ...
)}
```

## Implemente design responsivo em:
- Inclua as tags de conteúdo no arquivo HTML do layout1:
```html title="no arquivo website/src/l-1/l-1.component.html"
<t-c1-l1 />
<t-c2-l1 />
<t-c3-l1 />
```
- Implemente design responsivo nos componentes de conteúdo:
  - c1-l1
  - c2-l1
  - c3-l1

## Additional Resources
https://angular.dev/tools/cli
