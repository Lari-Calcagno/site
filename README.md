# Como realizar commits

1. Adicionando os arquivos

> [!NOTE]
> Lembrando que pode ser **mais de um** arquivo

```bash
git add arquivo
git add outro_arquivo
```

2. Adicionando commit

> [!WARN]
> Lembre-se de adicionar uma mensagem (_-m_) para evitar dores de cabeça

```bash
git commit -m "mensagem do commit"
```

3. Enviando as alterações para o repositório

```bash
git push
```

ou

```bash
git push origin main
```

# Extra

Para verificar a situação da sua pasta atual, ver arquivos modificados, novos e afins, existe um comando. Um comando que visualiza o **status** da sua pasta.

```bash
git status
```