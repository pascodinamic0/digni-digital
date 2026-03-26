'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import type { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  ImagePlus,
  Undo2,
  Redo2,
} from 'lucide-react'
import './blog-editor.css'

type Props = {
  content: string
  onChange: (html: string) => void
  disabled?: boolean
  onUploadImage?: (file: File) => Promise<string | null>
}

export function BlogRichEditor({ content, onChange, disabled, onUploadImage }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)
  const uploadBusy = useRef(false)
  const editorRef = useRef<Editor | null>(null)
  const onUploadImageRef = useRef(onUploadImage)
  useEffect(() => {
    onUploadImageRef.current = onUploadImage
  }, [onUploadImage])

  const editor = useEditor(
    {
      immediatelyRender: false,
      extensions: [
        StarterKit.configure({
          heading: { levels: [2, 3] },
        }),
        Underline,
        Link.configure({
          openOnClick: false,
          HTMLAttributes: { class: 'text-accent underline' },
        }),
        Image.configure({
          inline: false,
          allowBase64: false,
          HTMLAttributes: {
            class: 'rounded-lg border border-border-light/60',
          },
        }),
        Placeholder.configure({
          placeholder: 'Write here — readers see formatted text; images appear inline where you place them.',
        }),
      ],
      content,
      editable: !disabled,
      editorProps: {
        attributes: {
          class: 'blog-rich-editor__inner',
        },
        handlePaste(_view, event) {
          const upload = onUploadImageRef.current
          if (!upload) return false
          const items = event.clipboardData?.items
          if (!items) return false
          for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (item?.kind === 'file' && item.type.startsWith('image/')) {
              event.preventDefault()
              const file = item.getAsFile()
              if (file && !uploadBusy.current) {
                const run = onUploadImageRef.current
                if (!run) return true
                uploadBusy.current = true
                void run(file)
                  .then((url) => {
                    const ed = editorRef.current
                    if (url && ed) ed.chain().focus().setImage({ src: url }).run()
                  })
                  .finally(() => {
                    uploadBusy.current = false
                  })
              }
              return true
            }
          }
          return false
        },
        handleDrop(_view, event) {
          const upload = onUploadImageRef.current
          if (!upload) return false
          const file = event.dataTransfer?.files?.[0]
          if (!file || !file.type.startsWith('image/')) return false
          event.preventDefault()
          if (uploadBusy.current) return true
          const run = onUploadImageRef.current
          if (!run) return true
          uploadBusy.current = true
          void run(file)
            .then((url) => {
              const ed = editorRef.current
              if (url && ed) ed.chain().focus().setImage({ src: url }).run()
            })
            .finally(() => {
              uploadBusy.current = false
            })
          return true
        },
      },
      onUpdate: ({ editor: ed }) => {
        onChange(ed.getHTML())
      },
    },
    []
  )

  editorRef.current = editor

  const insertImageFromFile = useCallback(
    async (file: File) => {
      const ed = editorRef.current
      if (!ed || !onUploadImage || uploadBusy.current) return
      uploadBusy.current = true
      try {
        const url = await onUploadImage(file)
        if (url) ed.chain().focus().setImage({ src: url }).run()
      } finally {
        uploadBusy.current = false
      }
    },
    [onUploadImage]
  )

  useEffect(() => {
    if (!editor) return
    const current = editor.getHTML()
    if (content.trim() && current !== content && !editor.isFocused) {
      editor.commands.setContent(content, { emitUpdate: false })
    }
  }, [content, editor])

  useEffect(() => {
    if (!editor) return
    editor.setEditable(!disabled)
  }, [disabled, editor])

  if (!editor) {
    return (
      <div className="blog-rich-editor-shell">
        <div className="blog-rich-editor__scroll flex min-h-[min(45vh,420px)] items-center justify-center text-sm text-muted">
          Preparing editor…
        </div>
      </div>
    )
  }

  const setLink = () => {
    const prev = editor.getAttributes('link').href
    const next = typeof window !== 'undefined' ? window.prompt('Link URL', prev || 'https://') : null
    if (next === null) return
    if (next === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: next }).run()
  }

  const pickImage = () => fileRef.current?.click()

  return (
    <div className="blog-rich-editor-shell">
      <div className="blog-rich-editor-toolbar" role="toolbar" aria-label="Formatting">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
          disabled={disabled}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
          disabled={disabled}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
          disabled={disabled}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </button>
        <span className="toolbar-sep" aria-hidden />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          disabled={disabled}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          disabled={disabled}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </button>
        <span className="toolbar-sep" aria-hidden />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          disabled={disabled}
          title="Bullet list"
        >
          <List className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          disabled={disabled}
          title="Numbered list"
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          disabled={disabled}
          title="Quote"
        >
          <Quote className="h-4 w-4" />
        </button>
        <span className="toolbar-sep" aria-hidden />
        <button type="button" onClick={() => setLink()} disabled={disabled} title="Link">
          <Link2 className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => pickImage()} disabled={disabled || !onUploadImage} title="Insert image">
          <ImagePlus className="h-4 w-4" />
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) void insertImageFromFile(f)
            e.target.value = ''
          }}
        />
        <span className="toolbar-sep" aria-hidden />
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={disabled || !editor.can().undo()}
          title="Undo"
        >
          <Undo2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={disabled || !editor.can().redo()}
          title="Redo"
        >
          <Redo2 className="h-4 w-4" />
        </button>
      </div>
      <div className="blog-rich-editor__scroll">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
