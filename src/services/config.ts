/**
 * Environment Configuration Service
 *
 * A generic utility to safely access environment variables with type safety.
 * All environment variables in Vite must be prefixed with VITE_ to be exposed.
 */

interface EnvConfig {
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

class ConfigService {
  private config: EnvConfig;

  constructor() {
    this.config = {
      emailjs: {
        serviceId: this.getEnvVar("VITE_EMAILJS_SERVICE_ID"),
        templateId: this.getEnvVar("VITE_EMAILJS_TEMPLATE_ID"),
        publicKey: this.getEnvVar("VITE_EMAILJS_PUBLIC_KEY"),
      },
    };
  }

  /**
   * Safely retrieves an environment variable
   * @param key - The environment variable key
   * @param defaultValue - Optional default value if env var is not set
   * @returns The environment variable value
   */
  private getEnvVar(key: string, defaultValue?: string): string {
    const value = import.meta.env[key];

    if (!value && !defaultValue) {
      console.warn(`Environment variable ${key} is not set`);
      return "";
    }

    return value || defaultValue || "";
  }

  /**
   * Get EmailJS configuration
   */
  get emailJs() {
    return this.config.emailjs;
  }

  /**
   * Check if all required EmailJS credentials are configured
   */
  get isEmailJsConfigured(): boolean {
    return !!(
      this.config.emailjs.serviceId &&
      this.config.emailjs.templateId &&
      this.config.emailjs.publicKey
    );
  }

  /**
   * Generic method to get any environment variable
   * @param key - The environment variable key (without VITE_ prefix)
   * @param defaultValue - Optional default value
   */
  getVar(key: string, defaultValue?: string): string {
    return this.getEnvVar(`VITE_${key}`, defaultValue);
  }
}

// Export a singleton instance
export const config = new ConfigService();
