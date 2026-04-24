import React from "react"

export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  )
}

export function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={`leading-7 not-first:mt-6 ${className}`}>{children}</p>
}

export function TypographyBlockquote({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  )
}

export function TypographyMuted({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  )
}

export function TypographyList({
  listItems,
  className,
}: {
  listItems: React.ReactNode[]
  className?: string
}) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export function TypographyLead({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>{children}</p>
  )
}

export function TypographyLarge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>
}

export function TypographySmall({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <small className={`text-sm leading-none font-medium ${className}`}>
      {children}
    </small>
  )
}
