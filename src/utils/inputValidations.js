export const titulo_validation = {
  name: 'titulo',
  label: 'titulo',
  type: 'text',
  id: 'titulo',
  placeholder: 'write your titulo ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 20,
      message: '20 characters max',
    },
  },
}

export const contenido_validation = {
  name: 'contenido',
  label: 'contenido',
  multiline: true,
  id: 'contenido',
  placeholder: 'write contenido ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
    }
  }
  export const etiqueta_validation = {
    name: 'etiqueta',
    label: 'etiqueta',
    type: 'text',
    id: 'etiqueta',
    placeholder: 'write your etiqueta ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 20,
        message: '20 characters max',
      },
    },
  }

