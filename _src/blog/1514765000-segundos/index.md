---
title: 1514765000 segundos
featured_image: space-48.jpg
reading_time: 5
date: 2021-10-13
---

# {{ title }}

{% set publication = {
  full: date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
  year: date.toLocaleString('es-ES', {year: 'numeric'}),
  month: date.toLocaleString('es-ES', {month: '2-digit'}),
  day: date.toLocaleString('es-ES', {day: '2-digit'})
} %}
<div class="post__meta"><time class="post__published-date" datetime="{{ publication.year }}-{{ publication.month }}-{{ publication.day }}">{{ publication.full }}</time> <time class="post__reading-time" datetime="PT{{ reading_time }}M">{{ reading_time }} min.</time></div>


J hskhdf kdshfk sdjhfk sdhklf dsh kfsdhk fskl fskdjf ksdj fklsdjh fkjsdh fksd fkjsk 