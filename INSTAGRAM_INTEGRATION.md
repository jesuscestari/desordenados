# Integración de Instagram Feed

Este documento explica cómo integrar un feed real de Instagram en el componente `InstagramFeed.tsx`.

## Opciones Disponibles

### 1. Instagram Basic Display API (Recomendado para desarrollo propio)

**Pasos:**
1. Crear una app en [Facebook Developers](https://developers.facebook.com/)
2. Configurar Instagram Basic Display
3. Obtener Access Token
4. Crear un endpoint backend que consuma la API
5. Reemplazar los `placeholderPosts` con datos reales

**Ejemplo de estructura de datos:**
```typescript
interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  caption?: string;
  like_count?: number;
  comments_count?: number;
}
```

### 2. Servicios de Terceros (Más fácil, requiere suscripción)

**Opciones populares:**
- **Elfsight Instagram Feed**: https://elfsight.com/es/instagram-feed-instashow/
- **Tagembed**: https://tagembed.com/es/instagram-widget/
- **Taggbox**: https://taggbox.com/es/instagram-widget/

Estos servicios proporcionan widgets que puedes integrar fácilmente.

### 3. Embed Oficial de Instagram

Puedes usar el embed oficial de Instagram para publicaciones individuales:

```html
<blockquote class="instagram-media" data-instgrm-permalink="URL_DEL_POST" data-instgrm-version="14">
  <!-- Instagram generará el contenido -->
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

### 4. Implementación Actual

El componente actual muestra un diseño visual minimalista con placeholders que enlazan directamente al perfil de Instagram. Esto es funcional y estético, pero no muestra contenido real.

## Cómo Actualizar el Componente

Para integrar un feed real, reemplaza la sección de `placeholderPosts` con datos reales:

```typescript
// En lugar de:
const placeholderPosts = [...];

// Usa:
const [posts, setPosts] = useState<InstagramPost[]>([]);

useEffect(() => {
  // Llamar a tu API o servicio
  fetchInstagramPosts().then(setPosts);
}, []);
```

Luego actualiza el renderizado para usar las imágenes reales:

```tsx
<img 
  src={post.media_url} 
  alt={post.caption || 'Instagram post'}
  className="w-full h-full object-cover"
/>
```

## Notas Importantes

- **Rate Limits**: La API de Instagram tiene límites de tasa, considera implementar caché
- **Autenticación**: Necesitarás manejar tokens de acceso y refresh tokens
- **Privacidad**: Asegúrate de cumplir con las políticas de privacidad de Instagram
- **Rendimiento**: Considera lazy loading para las imágenes

## Enlaces Útiles

- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Embed Documentation](https://developers.facebook.com/docs/instagram/embedding)
- [Facebook Developers Portal](https://developers.facebook.com/)

