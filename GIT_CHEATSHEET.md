# Git & GitHub Cheatsheet — With Examples

A practical reference for Git commands, from cloning a repository to branches, commits, pushing, Pull Requests, conflict resolution, and recovery.

For the `smart-b2b-os` project, frontend and backend developers share one repository. Each developer should work on a feature branch, then open a Pull Request (PR) into `main`.

> **Important:** Pushing a branch uploads commits to GitHub; it does not automatically merge those commits into `main`.

## 1. Setup and configuration

| Command | Example | Purpose |
|---|---|---|
| Check Git version | `git --version` | Check your installed Git version. |
| Set commit name | `git config --global user.name "Your Name"` | Set the name shown in commits. |
| Set commit email | `git config --global user.email "you@example.com"` | Set the email associated with commits. |
| View configuration | `git config --list` | Show Git configuration. |
| Open command help | `git help commit` | Open documentation for `git commit`. |

Example:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list
git --version
```

Use the email associated with your GitHub account if you want GitHub to associate your commits with your profile.

## 2. Create or download a repository

| Command | Example | Purpose |
|---|---|---|
| Initialize Git | `git init` | Start tracking a folder with Git. |
| Clone a repository | `git clone https://github.com/nurulamin092/smart-b2b-os.git` | Download the repository and its history. |
| Clone into a named folder | `git clone <URL> smart-os` | Clone into a folder named `smart-os`. |
| View remotes | `git remote -v` | Show remote repository URLs. |
| Add a remote | `git remote add origin <URL>` | Add a remote named `origin`. |
| Get remote URL | `git remote get-url origin` | Display the URL for `origin`. |

Example for your project:

```bash
git clone https://github.com/nurulamin092/smart-b2b-os.git
cd smart-b2b-os
git remote -v
```

You normally do **not** need `git init` after cloning an existing repository.

## 3. Check changes and history

| Command | Example | Purpose |
|---|---|---|
| Check working tree | `git status` | Show modified, staged, and untracked files. |
| View unstaged changes | `git diff` | Show changes not yet staged. |
| View staged changes | `git diff --staged` | Review changes that will go into the next commit. |
| Full commit history | `git log` | Show detailed commit history. |
| Compact history | `git log --oneline` | Show one line per commit. |
| Branch history graph | `git log --oneline --graph --all` | Visualize commits and branches. |
| Inspect latest commit | `git show` | Show the latest commit and its changes. |
| List tracked files | `git ls-files` | List files tracked by Git. |
| Show line history | `git blame <file>` | Show which commit last changed each line. |
| Summarize changes | `git diff --stat` | Show a summary of unstaged changes. |

Example:

```bash
git status
git diff
git log --oneline --graph --all
```

## 4. Stage, commit, and unstage changes

| Command | Example | Purpose |
|---|---|---|
| Stage one file | `git add frontend/src/app/page.tsx` | Add one file's changes to the staging area. |
| Stage a folder | `git add frontend/` | Stage changes under `frontend/`. |
| Stage selected hunks | `git add -p` | Interactively choose which changes to stage. |
| Stage current directory changes | `git add .` | Stage changes and untracked files under the current directory. |
| Commit staged changes | `git commit -m "feat: add login page"` | Save a snapshot of staged changes. |
| Amend latest commit | `git commit --amend -m "feat: improve login page"` | Replace the latest commit; use caution if already pushed/shared. |
| Unstage a file | `git restore --staged <file>` | Remove a file from staging while keeping its edits. |
| Discard unstaged edits | `git restore <file>` | Discard unstaged edits to a file. |

Example:

```bash
git status
git add frontend/src/app/page.tsx
git diff --staged
git commit -m "feat(frontend): build homepage"
```

**Caution:** `git restore <file>` discards that file's unstaged changes. Review `git diff` first.

## 5. Branch commands

| Command | Example | Purpose |
|---|---|---|
| List local branches | `git branch` | Show local branches; `*` marks the current one. |
| List all branches | `git branch -a` | Show local and remote-tracking branches. |
| Create a branch | `git branch feature/frontend-login` | Create a branch without switching to it. |
| Switch branch | `git switch main` | Switch to an existing branch. |
| Create and switch | `git switch -c feature/frontend-login` | Create a branch and switch to it. |
| Older switch syntax | `git checkout main` | Switch branches using the older command. |
| Older create-and-switch syntax | `git checkout -b feature/backend-auth` | Create and switch using the older command. |
| Rename current branch | `git branch -m feature/frontend-login` | Rename the branch you're currently on. |
| Delete merged branch | `git branch -d feature/frontend-login` | Delete a local branch that has been merged. |
| Force-delete local branch | `git branch -D feature/old-work` | Delete a local branch even if unmerged; can lose access to work. |
| Return to previous branch | `git switch -` | Switch back to the previously checked-out branch. |

Recommended naming:

```text
feature/frontend-login
feature/frontend-dashboard
feature/backend-auth
feature/backend-users
fix/frontend-navbar
fix/backend-validation
```

Example:

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/frontend-login
```

Use branch names that describe the task, rather than only `member-1` or `member-2`.

## 6. Fetch, pull, and push

| Command | Example | Purpose |
|---|---|---|
| Fetch from origin | `git fetch origin` | Download remote updates without integrating them into your current branch. |
| Fetch all remotes | `git fetch --all` | Fetch from all configured remotes. |
| Pull upstream | `git pull` | Fetch and integrate changes from the configured upstream. |
| Pull remote main | `git pull origin main` | Integrate remote `main` into the current branch. |
| Fast-forward-only pull | `git pull --ff-only origin main` | Update the current branch only if a fast-forward is possible. |
| Push upstream | `git push` | Push to the configured upstream branch. |
| Push named branch | `git push origin feature/frontend-login` | Push a specific branch. |
| First push / set upstream | `git push -u origin feature/frontend-login` | Push a branch and set its upstream for future pushes. |
| Delete remote branch | `git push origin --delete feature/frontend-login` | Delete a branch on the remote. |
| Push tags | `git push --tags` | Push local tags to the remote. |

Example — first push:

```bash
git add frontend/
git commit -m "feat(frontend): add login page"
git push -u origin feature/frontend-login
```

After the upstream is configured, future pushes from that branch can usually use:

```bash
git push
```

### Fetch vs pull vs push

- **`fetch`** downloads remote information but doesn't integrate it into your current branch.
- **`pull`** downloads and integrates remote changes.
- **`push`** uploads your local commits to a remote repository.

## 7. Merge, rebase, and cherry-pick

| Command | Example | Purpose |
|---|---|---|
| Merge a branch | `git merge main` | Merge `main` into your current branch. |
| Abort a merge | `git merge --abort` | Cancel an in-progress merge when possible. |
| Rebase onto a branch | `git rebase main` | Replay your current branch's commits on top of `main`. |
| Continue rebase | `git rebase --continue` | Continue after resolving a rebase conflict. |
| Abort rebase | `git rebase --abort` | Cancel an in-progress rebase. |
| Cherry-pick a commit | `git cherry-pick a1b2c3d` | Apply a specific commit to the current branch. |

Example — update your feature branch with current `main`:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch feature/frontend-login
git merge main
```

Example — apply a specific commit from another branch:

```bash
git log --oneline feature/backend-auth
git cherry-pick a1b2c3d
```

Replace `a1b2c3d` with the real commit hash.

For beginners, merging is usually easier to understand. Rebasing rewrites commit history, so take care with branches other people use.

## 8. Resolve merge conflicts

| Command | Example | Purpose |
|---|---|---|
| Inspect status | `git status` | Identify conflicted files. |
| Inspect differences | `git diff` | Review changes and conflicts. |
| Mark file resolved | `git add <file>` | Stage the resolved file. |
| Continue merge | `git merge --continue` | Continue a merge if Git requests it. |
| Abort merge | `git merge --abort` | Cancel an in-progress merge. |
| Continue rebase | `git rebase --continue` | Continue after resolving a rebase conflict. |
| Abort rebase | `git rebase --abort` | Cancel an in-progress rebase. |

A conflicted file may contain markers like:

```text
<<<<<<< HEAD
<h1>Welcome</h1>
=======
<h1>Welcome to Smart B2B</h1>
>>>>>>> main
```

Edit the file to keep the correct final code, and remove all conflict markers.

For a merge:

```bash
git add frontend/src/app/page.tsx
git merge --continue
```

For a rebase:

```bash
git add frontend/src/app/page.tsx
git rebase --continue
```

If Git says the merge is already complete and no continuation is needed, check `git status` and proceed.

## 9. Stash unfinished work

| Command | Example | Purpose |
|---|---|---|
| Stash tracked changes | `git stash` | Temporarily save tracked-file changes. |
| Stash untracked files too | `git stash -u` | Include untracked files in the stash. |
| List stashes | `git stash list` | Show saved stashes. |
| Apply and remove stash | `git stash pop` | Apply latest stash and remove it if successful. |
| Apply but keep stash | `git stash apply` | Apply latest stash but keep it in the list. |
| Drop a stash | `git stash drop stash@{0}` | Delete a specific stash. |
| Clear all stashes | `git stash clear` | Delete every stash entry. |

Example — temporarily switch tasks:

```bash
git stash -u
git switch main
git pull --ff-only origin main
git switch feature/frontend-login
git stash pop
```

Review the restored changes; applying a stash can cause conflicts.

## 10. Tags and releases

| Command | Example | Purpose |
|---|---|---|
| List tags | `git tag` | Show local tags. |
| Create lightweight tag | `git tag v1.0.0` | Mark a commit with a lightweight tag. |
| Create annotated tag | `git tag -a v1.0.0 -m "First release"` | Create a tag with a message and metadata. |
| Inspect tag | `git show v1.0.0` | Show the tag and its target. |
| Push one tag | `git push origin v1.0.0` | Push a tag to GitHub. |
| Delete remote tag | `git push origin --delete v1.0.0` | Delete a tag on the remote. |

Example:

```bash
git switch main
git pull --ff-only origin main
git tag -a v1.0.0 -m "First stable release"
git push origin v1.0.0
```

Create release tags when your team agrees that a version is ready.

## 11. `.gitignore` and cleanup

| Command | Example | Purpose |
|---|---|---|
| Check ignore rule | `git check-ignore -v frontend/.env.local` | Show the ignore rule matching a file. |
| Stop tracking a file | `git rm --cached frontend/.env.local` | Remove a file from Git's index while keeping it locally. |
| Stop tracking a directory | `git rm -r --cached frontend/node_modules/` | Remove a directory from Git's index without deleting local files. |
| Preview cleanup | `git clean -n` | Preview untracked files and directories that would be deleted. |
| Delete untracked files | `git clean -fd` | Delete untracked files and directories. |

Example root `.gitignore`:

```gitignore
node_modules/
.env
.env.local
.next/
dist/
build/
coverage/
```

If a file was already tracked, ignoring it won't automatically untrack it. For example:

```bash
git rm --cached frontend/.env.local
git commit -m "chore: stop tracking local environment file"
```

This does not remove the file from earlier commits. If a secret was pushed, revoke or rotate it immediately.

**Caution:** Run `git clean -n` before `git clean -fd`. The latter permanently removes untracked files and directories.

## 12. Reset, revert, and recovery

| Command | Example | Purpose |
|---|---|---|
| Soft reset | `git reset --soft HEAD~1` | Undo latest commit while keeping changes staged. |
| Mixed reset | `git reset --mixed HEAD~1` | Undo latest commit while keeping changes unstaged. |
| Hard reset | `git reset --hard HEAD` | Discard tracked-file changes since the current commit. |
| Revert commit | `git revert a1b2c3d` | Reverse a commit by creating a new commit. |
| Inspect reflog | `git reflog` | View recent movements of `HEAD` and branch references. |

Example — recover a commit after a reset:

```bash
git reflog
```

Suppose the reflog shows that commit `f4e5d6a` contained your lost work. Create a recovery branch:

```bash
git branch recovery/login f4e5d6a
git switch recovery/login
```

Inspect the recovered work before proceeding.

**Important:** Prefer `git revert` for commits already shared with teammates. Use reset carefully, especially on pushed branches.

## 13. Compare branches and inspect history

| Command | Example | Purpose |
|---|---|---|
| Compare branch tips | `git diff main..feature/frontend-login` | Show file differences between branch tips. |
| Compare against remote main | `git diff origin/main..feature/frontend-login` | Compare a feature branch with fetched remote `main`. |
| Summarize unstaged changes | `git diff --stat` | Show a summary of unstaged changes. |
| Inspect a commit | `git show a1b2c3d` | Show a particular commit. |
| Inspect line history | `git blame frontend/src/app/page.tsx` | Show the last commit associated with each line. |
| Inspect branch graph | `git log --oneline --graph --all` | Visualize commits and branches. |

Example:

```bash
git fetch origin
git diff origin/main..feature/frontend-login
```

This compares the branch tips. It doesn't merge or modify either branch.

## 14. Pull Requests on GitHub

Pull Requests are normally created and reviewed on GitHub's website, rather than through standard Git commands.

1. Open the repository: https://github.com/nurulamin092/smart-b2b-os
2. Go to **Pull requests → New pull request**.
3. Set **base** to `main`.
4. Set **compare** to your feature branch, such as `feature/frontend-login`.
5. Describe your changes and request a review.
6. Merge after the required approvals and checks pass.
7. Delete the feature branch after merging if it's no longer needed.

Example — prepare and push a PR:

```bash
git switch feature/frontend-login
git add frontend/
git commit -m "feat(frontend): add login page"
git push -u origin feature/frontend-login
```

After the PR is merged:

```bash
git switch main
git pull --ff-only origin main
git branch -d feature/frontend-login
```

## 15. Complete daily workflow

This is the typical workflow for a frontend developer. A backend developer can substitute `backend/` and their own branch name.

```bash
# 1. Update shared main
git switch main
git pull --ff-only origin main

# 2. Create a feature branch
git switch -c feature/frontend-login

# 3. Make changes, then inspect them
git status
git diff

# 4. Stage and review
git add frontend/
git diff --staged

# 5. Commit
git commit -m "feat(frontend): add login page"

# 6. Push the branch
git push -u origin feature/frontend-login

# 7. Open a Pull Request on GitHub:
# feature/frontend-login -> main

# 8. After the PR is merged, update main
git switch main
git pull --ff-only origin main

# 9. Delete the completed local branch
git branch -d feature/frontend-login
```

## 16. Quick reference: 12 commands to memorize

| Command | Remember it as |
|---|---|
| `git clone <URL>` | Download the repository |
| `git status` | Check the current state |
| `git switch main` | Switch to main |
| `git pull --ff-only origin main` | Update main safely |
| `git switch -c feature/my-task` | Create a feature branch |
| `git add <file>` | Stage changes |
| `git diff --staged` | Review staged changes |
| `git commit -m "message"` | Save a commit |
| `git push -u origin <branch>` | Publish a new branch |
| `git fetch origin` | Download remote updates |
| `git merge main` | Merge main into your current branch |
| `git log --oneline --graph --all` | Inspect history |

## 17. Dangerous commands — use caution

- **`git reset --hard`** — can discard tracked-file changes.
- **`git push --force`** — can overwrite remote history and disrupt teammates. If history rewriting is necessary, coordinate and prefer `--force-with-lease`.
- **`git clean -fd`** — deletes untracked files and directories. Preview with `git clean -n`.
- **`git branch -D <branch>`** — force-deletes a local branch, even if unmerged.
- **`git restore <file>`** — discards unstaged edits to that file.

Before destructive operations, inspect `git status` and preserve any work you need.

---

## Recommended team rules for `smart-b2b-os`

1. Keep one shared Git repository.
2. Use `main` for stable, integrated code.
3. Create a separate feature branch for each task.
4. Commit small, meaningful changes.
5. Push feature branches and open Pull Requests.
6. Require reviews before merging into `main`.
7. Keep `.env` files, credentials, and generated dependencies out of commits.
8. Update your local `main` before starting a new task.

This cheatsheet is designed to work as a repository reference document, for example `GIT_CHEATSHEET.md` in the root of your project.

