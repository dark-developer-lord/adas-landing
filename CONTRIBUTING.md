# Contributing to ADAS Landing

Thank you for your interest in contributing to ADAS Landing! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/dark-developer-lord/adas-landing/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, Node version, browser)

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its use case
3. Explain why it would be valuable
4. Provide mockups or examples if possible

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style guidelines
   - Write clear commit messages
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear title and description
   - Reference related issues
   - Include screenshots for UI changes

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types when needed

```typescript
// Good
interface UserProps {
  name: string;
  email: string;
}

// Avoid
const user: any = { name: "John", email: "john@example.com" };
```

### React Components

- Use functional components with hooks
- Prefer named exports for components
- Use proper TypeScript props typing

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)
- **Types/Interfaces**: PascalCase (`UserData`)

### File Organization

- Group related files in folders
- Keep components small and focused
- Separate business logic from UI
- Use barrel exports (`index.ts`)

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Use shadcn/ui components when possible
- Keep responsive design in mind

```tsx
// Good
<div className="flex items-center gap-4 p-6 bg-card rounded-lg">
  <Button variant="primary">Click me</Button>
</div>
```

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers
- Test responsive layouts

## 📚 Documentation

- Update README.md for new features
- Add JSDoc comments for complex functions
- Update API documentation if needed
- Include usage examples

## 🔧 Development Workflow

1. **Pull latest changes**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add: Your feature description"
   ```

4. **Keep branch updated**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature
   ```

## 🐛 Commit Message Format

Use conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: Add drone configurator page
fix: Resolve checkout button state issue
docs: Update API documentation
style: Format code with Prettier
refactor: Simplify order calculation logic
```

## ❓ Questions?

If you have questions:
- Open a discussion on GitHub
- Check existing issues
- Contact the maintainers

Thank you for contributing! 🎉
