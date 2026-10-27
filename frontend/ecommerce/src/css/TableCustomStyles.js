const tableCustomStyles = {
  table: {
    style: {
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      overflow: 'hidden',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
      minHeight: '48px',
    },
  },
  headCells: {
    style: {
      fontWeight: 700,
      justifyContent: 'center',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '11px',
    },
  },
  rows: {
    style: {
      fontSize: '13px',
      color: '#334155',
      minHeight: '48px',
      borderBottom: '1px solid #f1f5f9',
      transition: 'background-color .15s ease',
      '&:hover': {
        backgroundColor: '#eef2ff',
      },
    },
  },
  cells: {
    style: {
      justifyContent: 'center',
      padding: '10px 12px',
    },
  },
  pagination: {
    style: {
      borderTop: '1px solid #e2e8f0',
      color: '#64748b',
    },
  },
};

export default tableCustomStyles;
