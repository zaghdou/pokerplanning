interface JiraIssue {
    id: string;
    key: string;
    fields: {
      summary: string;
      description: string;
      status: {
        name: string;
      };
      // Add other fields as needed
    };
  }