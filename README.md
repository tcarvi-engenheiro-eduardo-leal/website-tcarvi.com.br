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
npm install
```
```bash
npm run build
```
```bash
npm run start
```

## Comandos para manutenção do website

```bash
ng add @angular/material
```  
```bash
npm install normalize.css
```  
```json title"Inluir em angular.json/projects/website/architect/build/options"
"styles": [
  "node_modules/normalize.css/normalize.css",
  "src/styles.css"
],
```  
```bash
ng g c layout-1 --prefix t --project app1 --selector t-layout-1 --view-encapsulation Emulated
```  
```bash
ng g c layout-2 --prefix t --project app1 --selector t-layout-2 --view-encapsulation Emulated
```  
```bash
ng g c layout-3 --prefix t --project app1 --selector t-layout-3 --view-encapsulation Emulated
```  

```bash
ng g c conteudo-l1-1 --prefix t --project app1 --selector t-conteudo-l1-1 --view-encapsulation Emulated
```  
```bash
ng g c conteudo-l1-2 --prefix t --project app1 --selector t-conteudo-l1-2 --view-encapsulation Emulated
```  
```bash
ng g c conteudo-l2-1 --prefix t --project app1 --selector t-conteudo-l2-1 --view-encapsulation Emulated
```  
```bash
ng g c conteudo-l2-2 --prefix t --project app1 --selector t-conteudo-l2-2 --view-encapsulation Emulated
```  
```bash
ng g c conteudo-l3-1 --prefix t --project app1 --selector t-conteudo-l3-1 --view-encapsulation Emulated
```  
```bash
ng g c conteudo-l3-2 --prefix t --project app1 --selector t-conteudo-l3-2 --view-encapsulation Emulated
```  
```bash
ng test
```

```bash
ng e2e
```

## Additional Resources
https://angular.dev/tools/cli



cd website
ng generate  --application app1 --prefix t --style scss --view-encapsulation Emulated