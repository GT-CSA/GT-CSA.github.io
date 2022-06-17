import React from 'react'

const Container = ({ className, style, children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      className={className}
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-x-content)',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
