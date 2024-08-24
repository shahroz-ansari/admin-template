import { Alert, Box, Collapse, Paper, Typography } from '@mui/material';
import type { ErrorInfo, ReactNode } from 'react';
import React from 'react';

// Define the types for the props
interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

// Define the types for the state
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    if (import.meta.env.VITE_ENVIRONMENT === 'development') {
      this.setState({ error, errorInfo });
    }
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={styles.container}>
          {this.props.fallback}
          {this.state.error && (
            <Paper sx={styles.errorContainer}>
              <Typography variant="h6" sx={styles.errorTitle}>
                Something went wrong:
              </Typography>
              <Typography variant="body1" sx={styles.errorMessage}>
                {this.state.error.toString()}
              </Typography>
              {this.state.errorInfo && (
                <Collapse in={true} sx={styles.errorDetails}>
                  <Alert severity="error">
                    <Typography variant="subtitle1">Stack Trace</Typography>
                    <Typography variant="body2" sx={styles.errorStack}>
                      {this.state.errorInfo.componentStack}
                    </Typography>
                  </Alert>
                </Collapse>
              )}
            </Paper>
          )}
        </Box>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    padding: 2,
    backgroundColor: '#f2f2f2',
    borderRadius: 1,
  },
  errorContainer: {
    mt: 2,
    p: 2,
    backgroundColor: '#ffdddd',
    borderRadius: 1,
    border: '1px solid #ff0000',
  },
  errorTitle: {
    color: '#ff0000',
  },
  errorMessage: {
    color: '#d8000c',
  },
  errorDetails: {
    mt: 1,
    cursor: 'pointer',
  },
  errorStack: {
    whiteSpace: 'pre-wrap',
    color: '#333',
  },
};

export default ErrorBoundary;
