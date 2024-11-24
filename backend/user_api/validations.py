import re

def custom_validation(data):
    """
    Perform any custom validations if needed before passing to the serializer.
    """
    # Example: Add more validation logic as required
    return data

def validate_email(data):
    """
    Simple email validation check.
    """
    email = data.get('email', '')
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if not re.match(email_regex, email):
        return False
    return True

def validate_password(data):
    """
    Validate password length and complexity.
    """
    password = data.get('password', '')
    if len(password) < 8:
        return False
    # Add more checks as needed (e.g., for uppercase, numbers, etc.)
    return True
