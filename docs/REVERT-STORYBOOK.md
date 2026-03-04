# Revert Our Story Storybook

**Checkpoint tag:** `pre-storybook-our-story`

If you want to go back to the state before the storybook modal was added, or try a different direction for the Our Story section:

```bash
# Option 1: Reset to checkpoint (discards storybook changes)
git checkout pre-storybook-our-story -- app/[locale]/about/page.tsx
git rm app/components/StorybookModal.tsx  # if you want to remove the component

# Option 2: Full revert to that commit
git reset --hard pre-storybook-our-story
```

To list the tag:
```bash
git tag -l pre-storybook-our-story
```
