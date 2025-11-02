# Guía: Cómo Agregar Imágenes de Instagram

## Opción 1: Obtener URLs de Imágenes Manualmente (Recomendado)

### Pasos:

1. **Abre la publicación en Instagram**
   - Ve a: https://www.instagram.com/desordenados_electromovilidad/
   - Abre la publicación que quieres mostrar

2. **Obtén la URL de la imagen**
   - **Método 1**: Click derecho en la imagen → "Abrir imagen en nueva pestaña" → Copia la URL
   - **Método 2**: Usa herramientas como:
     - https://www.picuki.com/profile/desordenados_electromovilidad
     - https://instadp.com/
     - Inspecciona el elemento en el navegador (F12)

3. **Obtén la URL de la publicación**
   - Click en los 3 puntos (⋯) → "Copiar enlace"
   - Formato: `https://www.instagram.com/p/CODIGO/` o `https://www.instagram.com/reel/CODIGO/`

4. **Agrega al componente**
   - Abre: `src/components/InstagramFeed.tsx`
   - Agrega en el array `instagramPosts`:

```typescript
const instagramPosts: InstagramPost[] = [
  {
    imageUrl: 'https://scontent.cdninstagram.com/v/...', // URL de la imagen
    postUrl: 'https://www.instagram.com/p/ABC123xyz/',
    likes: 120,        // Opcional
    comments: 15       // Opcional
  },
  {
    imageUrl: 'https://scontent.cdninstagram.com/v/...',
    postUrl: 'https://www.instagram.com/reel/DEF456uvw/',
    likes: 89,
    comments: 8
  },
  // Agrega más publicaciones...
];
```

## Opción 2: Usar Herramientas Online

### Picuki (Recomendado)
1. Ve a: https://www.picuki.com/profile/desordenados_electromovilidad
2. Haz clic en la publicación que quieres
3. Click derecho en la imagen → "Copiar dirección de imagen"
4. También puedes copiar el enlace de la publicación desde la barra de direcciones

## Estructura de Datos

```typescript
interface InstagramPost {
  imageUrl: string;    // URL directa de la imagen (requerido)
  postUrl: string;     // URL de la publicación en Instagram (requerido)
  likes?: number;       // Número de likes (opcional)
  comments?: number;    // Número de comentarios (opcional)
}
```

## Características

✅ **Carga inicial** - Las imágenes se cargan una vez al inicio  
✅ **Lazy loading** - Las imágenes se cargan cuando son visibles  
✅ **Hover effects** - Muestra likes/comentarios al pasar el mouse  
✅ **Responsive** - Grid adaptable (2 columnas móvil, 3 desktop)  
✅ **Control total** - Tú decides qué imágenes mostrar  

## Notas Importantes

- Las URLs de imágenes de Instagram pueden cambiar/expirar
- Si una imagen no carga, verifica que la URL siga siendo válida
- Puedes agregar hasta 9-12 publicaciones (recomendado 6-9)
- Los valores de `likes` y `comments` son opcionales - si no los agregas, no se mostrarán

## Ejemplo Completo

```typescript
const instagramPosts: InstagramPost[] = [
  {
    imageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-15/...',
    postUrl: 'https://www.instagram.com/p/CxYzAbc123/',
    likes: 156,
    comments: 22
  },
  {
    imageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-15/...',
    postUrl: 'https://www.instagram.com/reel/CwXyZdef456/',
    likes: 203,
    comments: 31
  },
  {
    imageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-15/...',
    postUrl: 'https://www.instagram.com/p/CvWxYghi789/',
    likes: 94,
    comments: 12
  },
];
```

¡Listo! Ahora tus imágenes de Instagram aparecerán con el diseño minimalista.

