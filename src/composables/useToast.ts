import '@styles/styles.scss'
import { toast } from 'vuetify-sonner'

export const useToast = (message: string, description = '', color = 'primary', duration = 3000) => {

  const icons: any = {
    'success': 'tabler-circle-check',
    'info': 'tabler-info-circle',
    'warning': 'tabler-alert-triangle',
    'error': 'tabler-alert-circle',
    'primary': 'tabler-circle',
  }

  // const { t } = useI18n({ useScope: 'global' })

  toast(message, {
    description: description,
    cardProps: {
      //   color: color,
      class: `my-toast`,
    },
    cardTextProps: {
      // v-card-text props
      class: `px-4 py-2 border-${color} bg-${color} text-${color}`,
    },
    cardActionsProps: {
      // v-card-actions props
    },
    prependIcon: icons[color],
    prependIconProps: {
      // v-icon props
      size: 40,
      class: `icon-${color}`,
    },
    duration: duration,
  })
}

