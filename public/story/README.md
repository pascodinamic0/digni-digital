# Storybook slide assets

Add background images or videos for each slide here. Reference them in `app/components/StorybookModal.tsx` in the `STORY_SLIDES` array.

**Slide IDs and suggested filenames:**

| Slide ID   | Suggested filename   |
|------------|-----------------------|
| origin     | origin.jpg or origin.mp4 |
| dream      | dream.jpg            |
| 2019       | 2019.jpg             |
| 2020       | 2020.jpg             |
| 2021       | 2021.jpg             |
| 2022       | 2022.jpg             |
| 2023       | 2023.jpg             |
| 2024       | 2024.jpg             |
| 2025       | 2025.jpg             |
| 2026       | 2026.jpg             |
| vision     | vision.jpg           |

**Usage in StorybookModal.tsx:**
```ts
{
  id: 'origin',
  title: 'The Beginning',
  content: '...',
  backgroundImage: '/story/origin.jpg',  // or
  backgroundVideo: '/story/origin.mp4',
}
```
