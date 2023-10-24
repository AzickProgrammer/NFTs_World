import { Avatar, Box, Flex, Heading, Link, Button } from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import NextLink from 'next/link'
import { MdBuild, MdCall } from 'react-icons/md'

import styles from '../styles/Home.module.css' // Corrected import path
import { title } from 'process'

export function Navbar() {
  const address = useAddress()

  return (
    <Box maxW={'1200px'} m={'auto'} py={'10px'} px={'40px'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading
            bgGradient="linear(to-l, #CC3300, #FF6600)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            NFTs World
          </Heading>
        </Link>
        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Button colorScheme="teal" size="md">
              Buy
            </Button>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Button colorScheme="teal" size="md">
              Sell
            </Button>
          </Link>
        </Flex>
        <Flex dir={'row'} alignItems={'center'}>
          <ConnectWallet
            className={styles.connectButton}
            welcomeScreen={{
              title: '중부대학생들이',
              subtitle: '정보보호학과: 91913804 & 91914406',
              img: {
                src: 'https://play-lh.googleusercontent.com/45WCnav9nixkRayh0C8k95542Jb3bfW1g54IsDdpyq_Sy-zQyvWDWMnwMuORxe4aHOE',
                height: 370,
                width: 400,
              },
            }}
          />

          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
