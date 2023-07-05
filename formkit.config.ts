import "@formkit/themes/genesis"
import { genesisIcons } from "@formkit/icons"
import { DefaultConfigOptions } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import '@formkit/pro/genesis'

const pro = createProPlugin('fk-914a578aca', inputs)

const config: DefaultConfigOptions = {
  plugins: [pro],
  icons: { ...genesisIcons }
}

export default config
