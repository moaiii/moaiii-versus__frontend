export default {
  
  props: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    min: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object // null
    ]),
    max: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object // null
    ]),
    disabled: PropTypes.bool,
    form: PropTypes.string,
    select: PropTypes.shape({
      isSelect: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // null
      ]),
      size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object // null
      ])
    }),
    options: PropTypes.shape({
      reducer: PropTypes.string,
      action: PropTypes.string
    }).isRequired,
    callback: PropTypes.func
  })
}