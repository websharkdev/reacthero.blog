import { Box, Grid, IconButton, Link, Snackbar, Tooltip, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useContext, useState } from 'react'

import { UserContextWrapper } from '@/components/layout/Layout'

import { LinkIcon, LinkedInIcon } from '@/assets/icons/ui'

type Props = {}
type CopyLinkProps = { path?: string }

const Root = styled(Grid)(({ theme }) => ({}))

export const PostCopyLink: FC<CopyLinkProps> = ({ path = '' }) => {
  const url = useRouter()
  const context = useContext(UserContextWrapper)

  return (
    <Tooltip title={'Add to clipboard'}>
      <Link
        className="unstyled"
        onClick={() => {
          navigator.clipboard.writeText(`${window.location.origin}${!path ? url.asPath : path}`)
          context.setClipboard(true)
        }}
      >
        <Image src={LinkIcon} />
      </Link>
    </Tooltip>
  )
}

export const PostLinks: FC<Props> = (props) => {
  const url = useRouter()
  const links = [
    {
      id: 0,
      name: 'LinkedIn',
      image: LinkedInIcon,
      tooltip: 'Share on LinkedIn!',
      link: `https://www.linkedin.com/shareArticle?&url=https%3A//reacthero-blog.vercel.app/${url.asPath}`,
    },
    {
      id: 1,
      name: 'LinkedIn',
      image: LinkedInIcon,
      tooltip: 'Share on LinkedIn!',
      link: `https://www.linkedin.com/shareArticle?&url=https%3A//reacthero-blog.vercel.app/${url.asPath}`,
    },
    {
      id: 2,
      name: 'LinkedIn',
      image: LinkedInIcon,
      tooltip: 'Share on LinkedIn!',
      link: `https://www.linkedin.com/shareArticle?&url=https%3A//reacthero-blog.vercel.app/${url.asPath}`,
    },
    {
      id: 3,
      name: 'LinkedIn',
      image: LinkedInIcon,
      tooltip: 'Share on LinkedIn!',
      link: `https://www.linkedin.com/shareArticle?&url=https%3A//reacthero-blog.vercel.app/${url.asPath}`,
    },
  ]

  return (
    <Root container wrap="nowrap" columnSpacing={1.5}>
      {links.map((link) => (
        <Grid item key={link.id}>
          <Tooltip title={link.tooltip}>
            <Link className="unstyled" href={link.link} target="_blank" rel="noopener noreferrer">
              <Image src={link.image} />
            </Link>
          </Tooltip>
        </Grid>
      ))}
      <Grid item>
        <PostCopyLink />
      </Grid>
    </Root>
  )
}
