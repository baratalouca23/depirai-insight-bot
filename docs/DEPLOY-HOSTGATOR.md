# 🚀 Checklist de Deploy - HostGator

## Pré-requisitos

- [ ] Conta ativa no HostGator com plano de hospedagem
- [ ] Acesso ao cPanel do HostGator
- [ ] Cliente FTP instalado (FileZilla recomendado) ou acesso ao Gerenciador de Arquivos
- [ ] Node.js instalado localmente (v18+)
- [ ] Domínio configurado e apontando para o HostGator

---

## 1️⃣ Preparação Local

### Build do Projeto
```bash
# Instalar dependências (se necessário)
npm install

# Gerar build de produção
npm run build
```

### Verificar Build
- [ ] Pasta `dist/` foi criada com sucesso
- [ ] Arquivo `dist/index.html` existe
- [ ] Pasta `dist/assets/` contém JS, CSS e imagens
- [ ] Arquivo `dist/.htaccess` está presente

### Testar Localmente (Opcional)
```bash
# Instalar servidor local
npm install -g serve

# Testar o build
serve -s dist
```
- [ ] Site funciona corretamente em `http://localhost:3000`
- [ ] Navegação entre páginas funciona
- [ ] Formulário de contato carrega corretamente

---

## 2️⃣ Configuração no HostGator

### Acessar cPanel
1. [ ] Fazer login no cPanel: `https://seudominio.com.br/cpanel` ou via área do cliente
2. [ ] Localizar seção "Arquivos"

### Preparar Diretório
- [ ] Acessar **Gerenciador de Arquivos**
- [ ] Navegar até `public_html/`
- [ ] **BACKUP**: Se houver site anterior, fazer backup antes de deletar
- [ ] Limpar conteúdo antigo da pasta `public_html/` (manter `.htaccess` se customizado)

---

## 3️⃣ Upload dos Arquivos

### Opção A: Via Gerenciador de Arquivos (Recomendado para poucos arquivos)
1. [ ] No cPanel, abrir **Gerenciador de Arquivos**
2. [ ] Navegar até `public_html/`
3. [ ] Clicar em **Carregar**
4. [ ] Fazer upload do arquivo `dist/` compactado como `.zip`
5. [ ] Extrair o arquivo na pasta `public_html/`
6. [ ] Mover todo conteúdo de `dist/` para raiz de `public_html/`
7. [ ] Deletar pasta `dist/` vazia e arquivo `.zip`

### Opção B: Via FTP (Recomendado para muitos arquivos)
```
Host: ftp.seudominio.com.br
Usuário: seu_usuario_cpanel
Senha: sua_senha_cpanel
Porta: 21
```

1. [ ] Conectar via FileZilla ou cliente FTP
2. [ ] Navegar até `public_html/` no servidor
3. [ ] Fazer upload de TODO conteúdo da pasta `dist/` local
4. [ ] Aguardar conclusão do upload

### Estrutura Final Esperada
```
public_html/
├── .htaccess
├── index.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── icon-192.png
├── icon-512.png
├── og-image.png
└── assets/
    ├── *.js
    ├── *.css
    └── imagens...
```

---

## 4️⃣ Configurações do Servidor

### Verificar .htaccess
- [ ] Arquivo `.htaccess` está na raiz de `public_html/`
- [ ] Conteúdo inclui regras de rewrite para SPA

### Ativar Módulos (Se necessário)
No cPanel, verificar se estão ativos:
- [ ] `mod_rewrite` - Para roteamento SPA
- [ ] `mod_deflate` - Para compressão GZIP
- [ ] `mod_expires` - Para cache de assets

### Configurar SSL (HTTPS)
1. [ ] No cPanel, acessar **SSL/TLS**
2. [ ] Instalar certificado Let's Encrypt gratuito
3. [ ] Ativar **Forçar HTTPS** nas configurações

---

## 5️⃣ Configuração de Domínio

### DNS (Se ainda não configurado)
- [ ] Apontar domínio para nameservers do HostGator:
  ```
  ns1.hostgator.com.br
  ns2.hostgator.com.br
  ```
- [ ] Aguardar propagação DNS (até 48h)

### Subdomínio WWW
- [ ] Verificar se `www.seudominio.com.br` redireciona corretamente
- [ ] Adicionar no `.htaccess` se necessário:
  ```apache
  RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
  ```

---

## 6️⃣ Testes Pós-Deploy

### Funcionalidade
- [ ] Página inicial carrega corretamente
- [ ] Navegação entre seções funciona (scroll suave)
- [ ] Páginas internas carregam (`/servicos`, `/portfolio`, etc.)
- [ ] Refresh em páginas internas NÃO dá erro 404
- [ ] Formulário de contato envia corretamente
- [ ] Botão do WhatsApp funciona
- [ ] Menu mobile abre e fecha
- [ ] Troca de tema (dark/light) funciona
- [ ] Troca de idioma funciona

### Performance
- [ ] Testar no [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Testar no [GTmetrix](https://gtmetrix.com/)
- [ ] Verificar se GZIP está ativo: [Check GZIP](https://www.giftofspeed.com/gzip-test/)

### SEO
- [ ] Verificar meta tags com [Meta Tags Analyzer](https://metatags.io/)
- [ ] Testar `robots.txt`: `https://seudominio.com.br/robots.txt`
- [ ] Testar `sitemap.xml`: `https://seudominio.com.br/sitemap.xml`
- [ ] Verificar Open Graph no [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### SSL/Segurança
- [ ] Site abre com HTTPS (cadeado verde)
- [ ] Testar no [SSL Labs](https://www.ssllabs.com/ssltest/)
- [ ] HTTP redireciona para HTTPS

### PWA
- [ ] Manifest carrega: `https://seudominio.com.br/manifest.json`
- [ ] Ícones carregam corretamente
- [ ] Service Worker registrado (verificar no DevTools > Application)

---

## 7️⃣ Pós-Deploy

### Google Search Console
1. [ ] Acessar [Search Console](https://search.google.com/search-console/)
2. [ ] Adicionar propriedade com seu domínio
3. [ ] Verificar propriedade via DNS ou arquivo HTML
4. [ ] Submeter sitemap: `https://seudominio.com.br/sitemap.xml`

### Google Analytics (Opcional)
- [ ] Criar propriedade no GA4
- [ ] Adicionar tag de rastreamento (se desejado)

### Monitoramento
- [ ] Configurar [UptimeRobot](https://uptimerobot.com/) para monitorar uptime
- [ ] Testar alertas de queda

---

## 🔧 Troubleshooting

### Erro 404 em páginas internas
**Causa**: `.htaccess` não está funcionando
**Solução**: 
1. Verificar se `mod_rewrite` está ativo
2. Adicionar `AllowOverride All` no Apache (contatar suporte HostGator)

### Site não carrega CSS/JS
**Causa**: Caminhos incorretos
**Solução**: Verificar se todos os arquivos da pasta `assets/` foram enviados

### Formulário não envia
**Causa**: Formspree não configurado ou bloqueado
**Solução**: Verificar ID do Formspree e testar em modo privado

### Imagens não aparecem
**Causa**: Arquivos não foram enviados ou permissões incorretas
**Solução**: 
1. Verificar upload completo
2. Definir permissões 644 para arquivos e 755 para pastas

---

## 📞 Suporte HostGator

- **Chat**: Disponível no painel
- **Telefone**: 0800 878 4343
- **Horário**: 24/7

---

## ✅ Deploy Concluído!

Após completar todos os itens, seu site estará:
- 🌐 Acessível publicamente
- 🔒 Protegido com HTTPS
- ⚡ Otimizado para performance
- 📱 Funcionando como PWA
- 🔍 Pronto para indexação do Google

**Data do Deploy**: ___/___/_____
**Responsável**: _________________
