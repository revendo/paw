# paw
Paw, the Design System for 🦊

### How to import Paw into a Vue project
1. Add following line to your `package.json` dependencies:
```json
{
   "dependencies": {
      "paw": "git+ssh://git@github.com/revendo/paw.git#{version}"
   }
}
```

2. Replace `{version}` with the version tag you want to work with, e.g. `v0.2.0`:
```
"paw": "git+ssh://git@github.com/revendo/paw.git#v0.2.0"
```

3. Install npm dependencies:
```bash
npm install paw
```

4. Import Paw components to your Vue file:
```JavaScript
import { PawButton, PawIcon, PawLink, PawList, PawListItem } from 'paw';

export default {
    name: 'App',
    components: {
        PawButton,
        PawIcon,
        PawLink,
        PawList,
        PawListItem,
    },
   //...
}
```

5. Each time a new component is implemented, you will need to add it to the import destructuring assignment:
```JavaScript
import { PawButton, PawIcon /* ... other components */ , NewPawComponent } from 'paw';
``` 

And to the list of components:

```JavaScript
export default {
    name: 'App',
    components: {
        PawButton,
        PawIcon,
        /* ... other components */
        NewPawComponent,
    },
   //...
}
```

## DevOps

### Deployments

1. Merge changes in `dev` branch
2. Update version in `package.json` file
3. Create pull request to `master` branch
4. Wait until tests were successful and request review from colleague
   - we test lint and if `package.json` has a new version
5. Merge pull request

The merge into the `master` branch will trigger a build process that creates a new branch and release with the version tag in the `package.json` file.
